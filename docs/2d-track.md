---
sidebar_position: 2
---

# 2D Track

A 2D representation of the track.

## Skaters

Skaters are circles with a 60cm diameter. Pivot has a stripe and Jammer has a star.

You can drag the skaters around.
Dragging a skater into another moves the other skater away.

Clicking on a skater reveals the annotation window in the top right and a small black handle to rotate the skater.

Skaters have a small visor that shows where the skater is looking.
The rotation can be seen best when looking at the situation on the 3D Track with 3D models enabled.
Currently this is the only way to rotate the skaters.

## Controls

There are 3 controls at the bottom of the 2D Track.

- Rotate: rotate the track 90° degrees counterclockwise / clockwise
- View: cycle through three views:
  - Full: shows the whole track including the ref lane
  - Track: just the track
  - Start: just the start from jammer line to pivot line
- Reset Track: resets the positions of the skaters and removes all annotations.

<details>
  <summary>Why rotate?</summary>
  <div>
    <ul>
      <li>Seeing situations in different rotations makes remembering the situation easier.</li>
      <li>People might have different internal representations of the track or the situation. E.g. the brace of a tripod might have learned the situation as jammer line is in front. If the person also interprets the jammer line at the top of the window as in front of them, then learning the situation should be easier, if the jammer line is aligned with their preference.</li>
    </ul>
  </div>
</details>

## Annotations

You can add annotations to each skater. Skaters with annotations will appear in [the legend](#legend).

Possible annotations are:

- Description
- Color variation: you can make the skater slightly off color. The resulting color is dynamically computed based on the team color in the settings. For lighter team colors the variation is darker, and for darker colors the variations is lighter.
- Pattern: a pattern is drawn over the skater color

Using both color variation and pattern is not recommended, since it's hard to decipher on the legend.

Using anything other than the description on a Jammer or Pivot is also not recommended.

## Legend

If the skater has any annotation then it will be shown in the Legend.
The original team color is shown at the second position, followed by the description text.

## Pack / Engagement Zone

The pack and engagement zone are marked on the floor.
See [Settings](./settings#pack-computation) for options.
