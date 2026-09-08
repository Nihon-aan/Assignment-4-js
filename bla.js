// ----- Grab everything we need once -----
const cards = document.querySelectorAll(".card-container .card");

const allBtn = document.getElementById("all-btn");
const interviewTabBtn = document.getElementById("interview-btn");
const rejectedTabBtn = document.getElementById("rejected-btn");
const tabBtns = [allBtn, interviewTabBtn, rejectedTabBtn];

const cardContainer = document.querySelector(".card-container");
const emptyBox = document.querySelector(".empty");
const availableJobsText = document.getElementById("available-jobs");

const statTotal = document.getElementById("statTotal");
const statInterview = document.getElementById("statInterview");
const statRejected = document.getElementById("statRejected");

let currentTab = "all";

// ----- Set up every card -----
cards.forEach((card) => {
  card.dataset.status = "not-applied";

  // Order in the HTML: delete button, status badge, interview button, rejected button
  const buttons = card.querySelectorAll("button");
  const deleteBtn = buttons[0];
  const statusBadge = buttons[1];
  const interviewBtn = buttons[2];
  const rejectedBtn = buttons[3];

  interviewBtn.addEventListener("click", () => setStatus(card, statusBadge, "interview"));
  rejectedBtn.addEventListener("click", () => setStatus(card, statusBadge, "rejected"));

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateCounts();
    filterCards();
  });
});

// ----- Change a card's status and restyle its badge -----
function setStatus(card, badge, status) {
  card.dataset.status = status;

  if (status === "interview") {
    badge.textContent = "INTERVIEW";
    badge.className =
      "btn w-fit border-none bg-[#ECFDF5] text-[14px] rounded-lg text-[#10B981] leading-[20px] mb-[8px]";
  } else if (status === "rejected") {
    badge.textContent = "REJECTED";
    badge.className =
      "btn w-fit border-none bg-[#FEF2F2] text-[14px] rounded-lg text-[#EF4444] leading-[20px] mb-[8px]";
  }

  updateCounts();
  filterCards();
}

// ----- Recalculate the 3 dashboard numbers -----
function updateCounts() {
  const remaining = document.querySelectorAll(".card-container .card");
  statTotal.textContent = remaining.length;
  statInterview.textContent = document.querySelectorAll('.card[data-status="interview"]').length;
  statRejected.textContent = document.querySelectorAll('.card[data-status="rejected"]').length;
}

// ----- Show only the cards that match the active tab -----
function filterCards() {
  const remaining = document.querySelectorAll(".card-container .card");
  let visibleCount = 0;

  remaining.forEach((card) => {
    const matches = currentTab === "all" || card.dataset.status === currentTab;
    card.style.display = matches ? "block" : "none";
    if (matches) visibleCount++;
  });

  availableJobsText.textContent = visibleCount;

  if (visibleCount === 0) {
    cardContainer.classList.add("hidden");
    emptyBox.classList.remove("hidden");
  } else {
    cardContainer.classList.remove("hidden");
    emptyBox.classList.add("hidden");
  }
}

// ----- Switch tabs -----
function setActiveTab(tab, clickedBtn) {
  currentTab = tab;

  tabBtns.forEach((btn) => {
    btn.classList.remove("bg-[#0F172A]", "text-white");
    btn.classList.add("bg-white", "text-[#64748B]");
  });

  clickedBtn.classList.remove("bg-white", "text-[#64748B]");
  clickedBtn.classList.add("bg-[#0F172A]", "text-white");

  filterCards();
}

allBtn.addEventListener("click", () => setActiveTab("all", allBtn));
interviewTabBtn.addEventListener("click", () => setActiveTab("interview", interviewTabBtn));
rejectedTabBtn.addEventListener("click", () => setActiveTab("rejected", rejectedTabBtn));

// ----- Run once on page load -----
updateCounts();
setActiveTab("all", allBtn);