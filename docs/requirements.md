# Calculator Requirements

## Tech

1. HTML
2. CSS
3. JS

## Wireframe

See wireframe-js-calculator.png

## MVP (minimal viable product)

The calculator should have a fake solar panel at the top. 

The calculator should have a display at the top.

The display should have a "0" by default.

The calculator should have the following buttons:

	1. Division (/)
	2. Multiplication (x)
	3. Subtraction (-)
	4. Addition (+)
	5. Calculate (=)
	6. Clear (C)
	7. All Clear (AC)
	8. Sign (+/-)

	The calculator should have 10 digit buttons, 0-9.

	The calculator should stor thee values internally:
		1. The first number entered by the user (possibly multidigit)
		2. The operator selected by the user (/, x, -, +)
		3. The second number by the user.

	The display should update as the user pesses number buttons.

	When the decimal point is pressed, it should be appended to the current number and the display should be updated,

	When the calclate button (=) is pressed, the calculator should:
		1. Apply the operation to the two stored numbers in the appropriate order
		2. Update the display.

	When the Clear button (C) is pressed, the current stored number should be discarded and the display should return to 0.

	When the All Clear button (AC) is pressed, all stored data should be discarded and the display should return to 0.

	When the Sign button (+/-) is pressed, the sign of the current value should alternate