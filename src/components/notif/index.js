import Swal from "sweetalert2";

export const confirmDelete = async () =>
  await Swal.fire({
    title: "Confirm!",
    text: "Do you want to delete this comment",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes"
  }).then((result) => {
    return result.isConfirmed ? true : false;
  });

export const notifSuccess = async (message) =>
  await Swal.fire({
    icon: "success",
    title: message || "Success",
  });
