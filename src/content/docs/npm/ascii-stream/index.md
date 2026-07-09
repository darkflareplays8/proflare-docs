---
title: ascii-stream
description: Play any video in the terminal as ASCII art, streamed frame by frame.
---

Play any video or GIF in your terminal as ASCII art, streamed frame by frame.

Bundles its own ffmpeg and ffprobe binaries via `ffmpeg-static`/`ffprobe-static` — no system install required.

By ProfessionalFlare.

## Install

```sh
npm install -g ascii-stream
```

## Quick start

```sh
stream video.mp4
stream video.gif
stream video.mp4 --ramp blocks --fps 15
```

Press Ctrl+C to stop.

See [CLI Reference](/npm/ascii-stream/cli/) for all flags and [Examples](/npm/ascii-stream/examples/) for library usage and setup notes.
