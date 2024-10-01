import Swal from 'sweetalert2';

const SwalAlert = ({ title, message, type = 'success', confirmButtonText = 'OK' }) => {
  return Swal.fire({
    icon: type,      // type can be 'success', 'error', 'warning', 'info', etc.
    title: title,    // title of the alert
    text: message,   // message/body of the alert
    confirmButtonText: confirmButtonText,
  });
};

export default SwalAlert;

