window.addEventListener("DOMContentLoaded", () => {
  const acceptBtn = document.getElementById("acceptBtn");
  const declineBtn = document.getElementById("declineBtn");
  const popup = document.getElementById("agePopup");
  const warningPopup = document.getElementById("warningPopup");
  const main = document.getElementById("mainContent");

  acceptBtn.addEventListener("click", () => {
    popup.style.display = "none";
    main.classList.remove("blurred");
  });

  declineBtn.addEventListener("click", () => {
    popup.style.display = "none";
    warningPopup.style.display = "flex";
    main.classList.add("blurred"); // le contenu reste flouté
  });
});

// QCM
document.getElementById("qcmForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const expected = {
    q1: ["obscurité", "la plus belle voix"],
    q2: ["achat et vente d’or", "braquage fleeca"],
    q3: ["je m'en vais de la ! et je préviens mon groupe !"],
    q4: ["loyauté", "discrétion"],
    q5: ["j'ai mal appeller les ems pitié !!"],
    q6: ["résister"],
    q7: ["en parler au groupe"],
    q8: ["en parler au groupe"]
  };

  let score = 0;

  for (let key in expected) {
    const checkboxes = document.querySelectorAll(
      `input[name="${key}"]:checked`
    );
    const values = Array.from(checkboxes).map((cb) => cb.value.toLowerCase());
    const expectedValues = expected[key].map((val) => val.toLowerCase());

    const allCorrect = expectedValues.every((v) => values.includes(v));
    const noExtra = values.every((v) => expectedValues.includes(v));

    if (allCorrect && noExtra) {
      score++;
    }
  }

  const result = document.getElementById("result");
  if (score === 8) {
    result.textContent = "✅ Bravo ! Code darknet : ORPHRECR3579";
    result.style.color = "lightgreen";
  } else if (score >= 5 && score < 8) {
    result.textContent =
      "🟡 Pas mal ! Mais tu dois mieux connaître Orpheus et ultima pour obtenir le code.";
    result.style.color = "orange";
  } else {
    result.textContent =
      "❌ Certaines réponses sont incorrectes. Essaie encore.";
    result.style.color = "red";
  }
});
