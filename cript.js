const button = document.getElementById("changeMessage");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  const messages = [
    '"Con là thiên thần nhỏ của gia đình!"',
    '"Mỗi ngày có con là một niềm hạnh phúc."',
    '"Ba mẹ yêu con nhiều lắm!"',
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);

  // Thêm hiệu ứng thay đổi tin nhắn
  message.style.opacity = 0; // Tắt dần tin nhắn hiện tại
  setTimeout(() => {
    message.textContent = messages[randomIndex];
    message.style.opacity = 1; // Hiển thị tin nhắn mới
  }, 300); // Chờ 300ms để hiệu ứng hoạt động
});
