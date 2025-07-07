document.getElementById('bot-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const botToken = document.getElementById('bot_token').value;
  const adminId = document.getElementById('admin_id').value;

  const status = document.getElementById('status');
  status.textContent = 'Создание...';

  try {
    const response = await fetch("http://localhost:8080/create_bot/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bot_token: botToken,
        admin_id: parseInt(adminId)
      })
    });

    const result = await response.json();

    if (response.ok) {
      status.textContent = `✅ Бот успешно создан! ID: ${result.message}`;
    } else {
      status.textContent = `❌ Ошибка: ${result.detail}`;
    }
  } catch (err) {
    status.textContent = `❌ Ошибка соединения с сервером`;
  }
});
