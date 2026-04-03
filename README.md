# 📊 EduTrack AI – Product Analytics Dashboard

## 🚀 Overview
EduTrack AI is a simple product prototype built using React that transforms ASER (Annual Status of Education Report) data into actionable insights for District Education Officers (DEOs).

The goal is to help decision-makers quickly identify low-performing regions and prioritize interventions.

---

## 🎯 Problem Statement
District Education Officers receive ASER reports with high-level data but lack tools to identify which schools require urgent attention.

This leads to:
- Delayed decision-making
- Poor resource allocation
- Ineffective interventions

---

## 💡 Solution
EduTrack AI provides a dashboard that:
- Displays performance data clearly
- Identifies high-risk areas
- Helps prioritize actions using rule-based logic

---

## 🧩 Features

### 📋 Priority Dashboard
- Displays State, Grade, and Performance Score
- Automatically assigns priority levels:
  - 🔴 High (score < 40)
  - 🟡 Medium (score < 55)
  - 🟢 Low (score ≥ 55)

### 🎨 Modern UI
- Clean dashboard design
- Gradient background
- Interactive table with hover effects

---

## 🧠 Logic Used

```js
if (score < 40) → High
else if (score < 55) → Medium
else → Low
