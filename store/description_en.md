# IME Enter Guard

## Summary
Prevents accidental form submission when pressing Enter to confirm IME (Input Method Editor) conversion.

## The Problem
When using an IME to input text in languages like Japanese, Chinese, or Korean, you press Enter to confirm the character conversion. However, many web applications (chat apps, search boxes, forms) interpret this Enter key as a "submit" action, causing your message to be sent before you finish typing.

## The Solution
IME Enter Guard detects when you're in the middle of IME conversion and blocks the Enter key event from propagating to the web application. This allows you to:
- Confirm your IME conversion naturally
- Continue typing without accidental submissions
- Have full control over when to actually submit

## Features
- Works on all websites automatically
- Zero configuration required
- Lightweight and fast
- No data collection or external connections
- Open source

## Supported Input Fields
- Text areas
- Text input fields

## How It Works
The extension monitors keyboard events and detects IME composition state. When Enter is pressed during active composition, it stops the event from reaching the website while still allowing the IME to complete its conversion.

## Privacy
This extension:
- Does not collect any data
- Does not make any network requests
- Does not require any special permissions
- Works entirely locally in your browser
