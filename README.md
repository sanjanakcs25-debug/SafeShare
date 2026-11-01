# How to use the SafeShare frontend

**Getting started**
1. Open the `safeshare` folder in VS Code, right-click `index.html`, and choose **Open with Live Server**.
2. The login page opens first. New users click **Sign up**, and existing users log in.

**Sign up**
- Fill in your name, email and password, then choose a role: Donor, Receiver / NGO, or Admin. Admin needs the access code.
- Enter the 6-digit code shown on screen. This is the demo email check.
- An admin must approve your account before you can log in.

**Log in**
- The site checks your role and opens your page: Donor, Receiver or Admin.

**Donor**
- Click **+ Add new donation** and enter the item, quantity and pickup area.
- Links in the details are checked, and unsafe ones are blocked.
- Under **Receiver requests**, click **Approve** or **Reject**.

**Receiver / NGO**
- Search for items, or filter by category (Books, Clothes, Food, Other).
- Click **Request item**, then track the status under **My requests**.

**Admin**
- **Approve**, **Suspend** or **Reinstate** users, including other admins.
- Check the **Blocked links and reports** list for unsafe posts.

**Demo logins**
- `admin@safeshare.com` / `Admin@123`
- `donor1@gmail.com` / `Donor@123`
- `receiver1@gmail.com` / `Recv@123`

**Good to know:** data is saved in your browser only, so it isn't shared between devices. To reset the demo, clear the site's localStorage.
