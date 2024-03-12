import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset(); // resets the form to the data before formatting not to null
            onCloseModal();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleCloseForm() {
    onCloseModal();
  }

  // const { id: editId, ...editValues } = cabinToEdit;
  // const isEditSession = Boolean(editId);

  // const queryClient = useQueryClient();
  // const { register, handleSubmit, reset, getValues, formState } = useForm({
  //   defaultValues: isEditSession ? editValues : {},
  // });
  // const { errors } = formState;
  // // console.log(errors);

  // // hook to mutate the cabin data by calling the function createCabin
  // const { isLoading: isCreating, mutate: createCabin } = useMutation({
  //   mutationFn: createEditCabin,
  //   onSuccess: () => {
  //     toast.success("Cabin successfully created.");
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => {
  //     toast.error(err.message);
  //   },
  // });
  // const { isLoading: isEditing, mutate: editCabin } = useMutation({
  //   mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
  //   onSuccess: () => {
  //     toast.success("Cabin successfully created.");
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //     reset();
  //   },
  //   onError: (err) => {
  //     toast.error(err.message);
  //   },
  // });

  // const isWorking = isEditing || isCreating;

  // function onSubmit(data) {
  //   const image = typeof data.image === "string" ? data.image : data.image[0];

  //   if (isEditSession)
  //     editCabin({ newCabinData: { ...data, image: image }, id: editId });
  //   else createCabin({ ...data, image: image }); // using that mutate hook with the form data in the onSubmit func
  // }
  // function onError(errors) {
  //   console.log(errors);
  // }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.max_capacity?.message}>
        <Input
          type="number"
          id="max_capacity"
          disabled={isWorking}
          {...register("max_capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regular_price?.message}>
        <Input
          type="number"
          id="regular_price"
          disabled={isWorking}
          {...register("regular_price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price must be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regular_price ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description of Cabin"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => handleCloseForm()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
