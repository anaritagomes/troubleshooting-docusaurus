---
id: intro
title: Troubleshooting Guide
sidebar_label: Troubleshooting Guide
---

## Situation
During an **online remote inspection**, the **audio stream connection is lost** when the car engine starts due to the customer's **Bluetooth connecting to the vehicle**.

## Outcome
- The **remote inspector cannot hear the customer**.
- The **inspection cannot proceed**.

## Expected Behavior
- The **audio stream should remain stable** even when the car engine starts.
- The **customer should be able to communicate without interruptions**.

## Explanation
- **Bluetooth auto-connects to the vehicle** when the engine starts, redirecting the phone’s microphone and speaker.
- Some vehicles **prioritize Bluetooth calls over app-based audio**, disrupting the inspection.
- **Audio streams are interrupted when devices switch connections**.

## Resolution
1. **Call the customer** and inform them of the issue.
2. **Ask them to turn off Bluetooth**:
    - **iPhone:** `Settings → Bluetooth → Toggle Off`
    - **Android:** `Quick Settings Panel → Tap Bluetooth Off`
3. **Have the customer refresh the stream**:
    - Close and reopen the inspection app.
    - Ensure **mobile data/Wi-Fi is stable**.
4. **Verify the audio connection** before continuing the inspection.

## 🖥️ Interactive Flowchart (Mermaid.js)

```mermaid
graph TD;
    A[Customer starts car] -->|Bluetooth connects to vehicle| B[Audio stream lost];
    B --> C[Inspector calls customer];
    C --> D[Customer turns off Bluetooth];
    D --> E[Customer refreshes stream];
    E --> F[Audio connection restored];
