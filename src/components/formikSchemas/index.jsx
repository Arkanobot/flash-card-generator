import * as Yup from "yup";

export const formSchema = Yup.object({
  groupTitle: Yup.string().min(3).max(15).required("Please enter a Title"),
  groupDescription: Yup.string()
    .min(3)
    .max(500)
    .required("Please enter a Description"),
  groupImage: Yup.mixed().required(" Required"),
  termName: Yup.string().min(3).max(15).required("Please enter a Term Name"),
  termDefination: Yup.string()
    .min(3)
    .max(500)
    .required("Please enter a Term Defination"),
  termImage: Yup.mixed(),
});
