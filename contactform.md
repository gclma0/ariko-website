Inspect the entire project before making any changes.

The website is already live and working correctly. The only feature that needs to change is the contact form.

Current situation:

- The website is a static Next.js export.
- The project generates an `out/` folder which is uploaded to cPanel.
- The current contact form uses Web3Forms.
- Web3Forms must be completely removed because I want to send emails directly using my own SMTP account.

Requirements:

1. Preserve the existing website.
   - Do not redesign the UI.
   - Do not modify unrelated functionality.
   - Do not break the current static deployment.
   - The frontend must continue generating the `out/` folder exactly as it does now.

2. Replace Web3Forms with a secure backend solution.
   - Choose the most appropriate backend architecture after inspecting the project.
   - The backend must be completely separate from the static frontend.
   - Do not convert the frontend into a server-rendered Next.js application.
   - Do not use Next.js API routes if they would require changing the existing deployment.

3. SMTP configuration:

   SMTP Host:
   mail.scrapbangla.com

   SMTP Port:
   465

   SMTP Security:
   SSL/TLS

   SMTP Username:
   no-reply@scrapbangla.com

   Recipient:
   shahrear@scrapbangla.com

   Use the visitor's email as Reply-To.

   Never hardcode or expose the SMTP password.

4. Security

Implement appropriate production-level validation and protection, including:

- validation
- sanitization
- spam prevention
- rate limiting if appropriate
- generic error responses

Choose the implementation that best fits the project.

5. Frontend

Keep the current design exactly the same.

Only replace the Web3Forms submission logic.

Preserve:

- loading state
- success state
- error state
- accessibility

6. Deployment

Do not assume how my cPanel is configured.

Implement the backend so that it can be deployed through cPanel in the simplest and safest way.

If multiple deployment approaches are possible, choose the one that requires the fewest changes to the existing website.

7. Verification

Run lint.

Run the production build.

Confirm that the frontend still generates the `out/` folder.

Fix any errors introduced by the migration.

Finally provide:

- every changed file
- backend folder structure
- deployment instructions
- cPanel configuration steps
- required environment variables
- testing checklist

Do not ask me for the SMTP password.

Use placeholders where required.

Before implementing anything, create a brief implementation plan explaining the chosen architecture and why it is the safest option for the current project. Wait for my approval before making any code changes.