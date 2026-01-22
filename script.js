function calculateStress() {
  let study = parseFloat(document.getElementById("studyHours").value);
  let tests = parseFloat(document.getElementById("tests").value);
  let pressure = parseFloat(document.getElementById("pressure").value);
  let exam = parseFloat(document.getElementById("exam").value);
  let sleep = parseFloat(document.getElementById("sleep").value);

  let HSI = (study * 0.3) + (tests * 0.25) + (pressure * 0.2) + (exam * 0.15) - (sleep * 0.1);

  let level = "";
  let advice = "";

  if (HSI < 4) {
    level = "Ổn định";
    advice = "Hãy tiếp tục duy trì thói quen học tập lành mạnh.";
  } else if (HSI < 6) {
    level = "Cần chú ý";
    advice = "Nên cân đối thời gian học và nghỉ ngơi.";
  } else if (HSI < 8) {
    level = "Áp lực cao";
    advice = "Hãy giảm tải bài tập và chia sẻ với thầy cô, gia đình.";
  } else {
    level = "Nguy cơ quá tải";
    advice = "Nên điều chỉnh lịch học và tìm sự hỗ trợ kịp thời.";
  }

  document.getElementById("result").innerHTML =
    `Chỉ số áp lực: ${HSI.toFixed(2)}<br>
     Mức độ: ${level}<br>
     Gợi ý: ${advice}`;
}
