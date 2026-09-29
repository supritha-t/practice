# Web Application Development — Internal Practice Portal

A full-featured exam preparation portal designed for students taking the **Web Application Development** internal assessment examination.

---

## 🚀 How to Run

### Method 1: Local HTTP Server (Recommended)
Run with Node.js:
```bash
npm start
# or:
node server.js
```
Then open: **[http://localhost:3000](http://localhost:3000)** in any modern web browser.

### Method 2: Direct File Open
You can also directly double-click or drag **`index.html`** into your browser (Chrome, Edge, Firefox, Safari).

---

## 🎯 Syllabus & Examination Blueprint (30 Marks)

| Part | Section | Marks | Format |
|---|---|---|---|
| **Part A** | **Multiple Choice Questions** | **10 Marks** | 10 questions (1 mark each). Instant feedback, category filtering, and detailed explanations. |
| **Part B** | **Coding Challenges** | **10 Marks** | Recreate the reference design using HTML & CSS. Live iframe preview, device viewport switch, and 5-point requirement validation. |
| **Part C** | **Descriptive Theory** | **10 Marks** | Answer 2 of 3 questions (5 marks each). Key points + comprehensive model answers with formatted code blocks. |

---

## 🛠️ Features Included

1. **Section A: 30 Multiple Choice Questions**
   - Syllabus categories: HTML Essentials, CSS Selectors & Cascading, Box Model & Sizing, GenAI in Web Development.
   - Practice Mode (instant feedback upon selection) vs. Exam Mode (batch check).
   - Detailed conceptual explanations for every question.
   - Progress bar, score counter, and filter by category.

2. **Section B: 6 Live HTML/CSS Coding Challenges**
   - 1. **Nature Gallery** (Easy) — Row of 3 card photos using Flexbox/Grid.
   - 2. **Student Profile** (Easy) — Centered student avatar card.
   - 3. **Food Card** (Medium) — Restaurant dish card with price and CTA.
   - 4. **Travel Landing** (Medium) — Hero banner with background imagery and headline.
   - 5. **Pricing Cards** (Hard) — 3-tier pricing comparison with elevated featured card.
   - 6. **Dashboard** (Hard) — Admin sidebar with stat cards and grid.
   - **Editor Tools**: Tab-key indentation, auto-run debouncing, starter template vs. reference solution loader, device viewport switcher (Desktop, Tablet, Mobile).
   - **Accurate Validators**: Custom checks for each challenge that verify all 5 requirements individually.

3. **Section C: 15 Descriptive Questions & Model Answers**
   - Interactive typing area with live word counter and auto-save.
   - "Key Points to Include" breakdown for exam scoring.
   - "Full Model Answer" with complete code snippets, diagrams, and explanation.

4. **Section D: Quick Revision & Interactive Tools**
   - Searchable syllabus revision cards.
   - **Interactive CSS Box Model Playground**: Live sliders for content, padding, border, and margin, with toggling between `content-box` and `border-box` and real-time computed dimension formula.
   - **CSS Specificity Calculator**: Type any selector to calculate its exact cascade tuple `(Inline, ID, Class, Element)`.

5. **Section E: Timed Exam Simulator**
   - 45-minute countdown clock.
   - Pulls 10 random MCQs, 2 coding challenges (choose 1), and 3 descriptive questions (choose 2).
   - Automated grading and performance diagnostic report with grade assignment.

6. **User Preferences & Persistence**
   - Dark Mode / Light Mode toggle.
   - Automatically saves all MCQ selections, challenge code, and written descriptive answers to `localStorage`.
   - "Reset Data" option to start a fresh practice session anytime.
