import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not get loaded");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin_images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin_images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

// export async function createCabin(newCabin) {
//   // https://hblgqqeuqfzbwedknsky.supabase.co/storage/v1/object/public/cabin_images/cabin-001.jpg
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin_images/${imageName}`;

//   // 1. CREATE CABIN
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imagePath }])
//     .select();
//   if (error) {
//     console.error(error);
//     throw new Error("Cabins could not get created");
//   }

//   // 2. if cabin created successfully ,UPLOAD THE IMAGE INTO THE BUCKET
//   const { error: imageUploadError } = await supabase.storage
//     .from("cabin_images")
//     .upload(imageName, newCabin.image);

//   // 3. if uploading error , DELETE THE CABIN
//   if (imageUploadError) {
//     deleteCabin(data.id);
//     console.error(error);
//     throw new Error("Images could not be uploaded");
//   }

//   return data;
// }
