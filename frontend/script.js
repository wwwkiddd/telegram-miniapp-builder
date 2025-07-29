document.getElementById("bot-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const botToken = document.getElementById("bot_token").value;
  const adminId = document.getElementById("admin_id").value;
  const result = document.getElementById("result");

  result.textContent = "Создание бота...";

  try {
    const response = await fetch("https://dibutcosmo.ru/create_bot/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bot_token: botToken,
        admin_id: parseInt(adminId),
      })
    });

    const data = await response.json();

    if (response.ok) {
      result.textContent = `✅ Бот создан! Вот ссылка: https://t.me/${data.username}`;
    } else {
      result.textContent = `❌ Ошибка: ${data.detail}`;
    }
  } catch (err) {
    result.textContent = "❌ Не удалось подключиться к серверу.";
  }
});
