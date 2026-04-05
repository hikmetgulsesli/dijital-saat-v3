```markdown
# Design System Document: The Midnight Chronometer

## 1. Overview & Creative North Star
**Creative North Star: "The Temporal Monolith"**

To design for time is to design for focus. This design system moves away from the cluttered, widget-heavy aesthetic of standard utility apps, opting instead for a "Temporal Monolith" approach. The interface is treated as a single, breathing entity where time isn't just displayed—it is staged. 

We break the "template" look by utilizing **intentional negative space** and **asymmetric balance**. By pushing the primary time display to extreme scales and using "Space Grotesk" for its architectural precision, we create a layout that feels more like a high-end editorial spread than a mobile utility. The goal is a professional, sleek aesthetic where the "quiet" parts of the screen are just as important as the numbers.

---

### 2. Colors & Surface Philosophy
The palette is rooted in the deep obsidian of `background` (#070d1f), moving away from generic grays into a sophisticated, cool-toned midnight.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural separation must be achieved through background shifts. For example, a settings panel should use `surface_container_low` against the `surface` background to create a soft, natural edge.
*   **Surface Hierarchy & Nesting:** Use the `surface_container` tiers to create a "recessed" or "elevated" feel. 
    *   *Lowest Tier:* `surface_container_lowest` (#000000) for deep backgrounds.
    *   *Highest Tier:* `surface_container_highest` (#0a2257) for interactive elements that need to "pop" toward the user.
*   **The Glass & Gradient Rule:** For floating modal elements (like an alarm picker), use `surface_variant` with a 60% opacity and a `backdrop-filter: blur(20px)`. This creates a "frosted glass" effect that maintains the deep atmospheric feel of the app.
*   **Signature Textures:** Main action buttons should not be flat. Apply a subtle linear gradient from `primary` (#7bd0ff) to `primary_dim` (#47c4ff) at a 135-degree angle to give the UI a "lit-from-within" professional polish.

---

### 3. Typography
The system uses a dual-font strategy to balance technical precision with human readability.

*   **Display & Headlines (Space Grotesk):** This is our "Hero" typeface. Used for the clock face (`display-lg`) and major headings. Its geometric nature reflects the precision of a digital quartz movement.
    *   *Editorial Tip:* Use `display-lg` for the hours and minutes, but drop the opacity of the seconds or the "colon" separator to 50% to create a visual hierarchy within the time itself.
*   **Titles & Body (Manrope):** A modern sans-serif used for functional information (e.g., "Alarmlar," "Dünya Saati"). It provides a softer, high-end tech feel that balances the sharpness of Space Grotesk.
*   **Labels (Inter):** Reserved for micro-copy and utility data. Its high x-height ensures readability at the smallest scales (`label-sm`).

**Language Note (Turkish):** Pay special attention to the uppercase 'İ' and lowercase 'ı'. Ensure line heights in `title-md` account for Turkish diacritics (ç, ğ, ş) without clipping.

---

### 4. Elevation & Depth
In this system, depth is "felt" rather than "seen."

*   **The Layering Principle:** Avoid shadows where possible. Instead, place a `surface_container_high` card on top of a `surface_dim` background. The subtle shift in blue-black tones creates a more premium "OLED-optimized" depth than a drop shadow ever could.
*   **Ambient Shadows:** If a floating action button (FAB) requires a shadow, use the `primary` color tinted at 10% opacity with a 32px blur. This creates a "glow" rather than a shadow, reinforcing the digital nature of the clock.
*   **The "Ghost Border":** For interactive states (like a focused input), use `outline_variant` (#32457c) at 20% opacity. It should look like a faint reflection on glass, not a stroke.

---

### 5. Components

*   **The Master Clock (Custom):** 
    *   Time: `display-lg`, color: `on_surface`.
    *   Date: `title-sm`, color: `secondary`, uppercase with 0.1em letter spacing.
*   **Buttons:**
    *   *Primary:* Pill-shaped (`rounded-full`), `primary` gradient background, `on_primary` text.
    *   *Tertiary (Ghost):* No background, `on_surface_variant` text, `title-sm` weight.
*   **Alarm Cards:**
    *   Use `surface_container_low`. Do not use dividers between cards; use a 16px gap (Spacing Scale).
    *   Toggle Switch: When "On," the track should be `primary_container` and the thumb `primary`.
*   **Selection Chips:**
    *   Used for days of the week (Pzt, Sal, Çar...).
    *   Selected: `primary_fixed_dim` background with `on_primary_fixed` text.
    *   Unselected: `secondary_container` background.
*   **Input Fields (Turkish: "Alarm Adı"):**
    *   Bottom-aligned only. No box. Use a 2px `outline_variant` underline that transitions to `primary` on focus.

---

### 6. Do's and Don'ts

**Do:**
*   **Do** use Turkish characters correctly (e.g., "Öğleden Sonra" instead of "PM" if the user selects 12h format).
*   **Do** embrace extreme scale. The time should be the undisputed king of the screen.
*   **Do** use "Surface Dim" for the background to save battery on OLED screens while maintaining the deep navy aesthetic.

**Don't:**
*   **Don't** use 1px dividers. If you need to separate content, use white space or a change in `surface_container` tone.
*   **Don't** use pure white (#FFFFFF). Always use `on_surface` (#dfe4ff) to reduce eye strain in dark environments.
*   **Don't** use standard "Material Blue." Use the specified `primary` (#7bd0ff) which has a bespoke, electric-cyan quality.

---

### 7. Signature Interaction: "The Pulse"
When an alarm triggers, do not simply flash the screen. Use a radial gradient expansion starting from the center of the screen, transitioning from `surface` to `primary_container` at a slow, rhythmic 60bpm pulse. This reinforces the "Professional and Sleek" aesthetic through motion.```