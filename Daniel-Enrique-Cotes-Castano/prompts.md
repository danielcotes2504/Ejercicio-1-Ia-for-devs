# ChatBot Specs: Chat GPT 5.1

# 1. First prompt
```
Refine the grammar of my request in english, this request is for the planning. I need you to act as a Software Developer, specifically a Senior Frontend Developer. You task is to take a provided index.html and a script.js file. For those files It's required to make some validations to these fields:

Nombre de Usuario: 
- Must be Mandatory
- Must have at least 5 characters

Email:
- Must be Mandatory
- Should have a valid email format, suggest a regex to do this validation.

- Password:
- Must be mandatory
- Should have at least 8 characters
- Shuld have a Capital word and a number

Code requriements:
- The validation code must be inserted and executed in the provided file called script.js.
- Make sure to show a red message on the div that belongs to each field if the validation fields
- If the validation is successful, the form must show a success message and clean the fields
- Suggestion: Do not override the existing code unless necessary.

Deliverables:
 Generate a Markdown file without formatting it, with the instructions that I've passed to you, make it precise. 
```

# 2. First Chat GPT 5.1 answer
```
I need you to act as a Software Developer, specifically a Senior Frontend Developer. Your task is to take the provided index.html and script.js files and implement the following field validations:

Username (Nombre de Usuario):
- The field must be mandatory.
- It must contain at least 5 characters.

Email:
- The field must be mandatory.
- It must follow a valid email format. Please suggest an appropriate regex for this validation.

Password:
- The field must be mandatory.
- It must contain at least 8 characters.
- It must include at least one uppercase letter and one number.

Code Requirements:
- All validation logic must be added and executed within the provided script.js file.
- For each field, display a red error message inside the corresponding div when the validation fails.
- If all validations pass, the form must display a success message and clear the input fields.
- Suggestion: Do not override the existing code unless necessary.

Deliverables:
- Generate a Markdown file without formatting that contains these instructions precisely as refined above.
```

# 3. Second prompt
```
 I need you to act as a Software Developer, specifically a Senior Frontend Developer. Your task is to take the provided index.html and script.js files and implement the following field validations:

Username (Nombre de Usuario):
- The field must be mandatory.
- It must contain at least 5 characters.

Email:
- The field must be mandatory.
- It must follow a valid email format. Please suggest an appropriate regex for this validation.

Password:
- The field must be mandatory.
- It must contain at least 8 characters.
- It must include at least one uppercase letter and one number.

Code Requirements:
- All validation logic must be added and executed within the provided script.js file.
- For each field, display a red error message inside the corresponding div when the validation fails.
- If all validations pass, the form must display a success message and clear the input fields.
- Suggestion: Do not override the existing code unless necessary.

Deliverables:
- The index.html file and the script.js file with the specified requirements and validations that match with the criteria

(I've attached the index.html and script.js files in the chat).
```

# 4. Second Chat GPT 5.1 answer
Chat GPT returned me the script file updated.
[script.sj](/Daniel-Enrique-Cotes-Castano//script.js)