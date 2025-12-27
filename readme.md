## 🎯 Mục tiêu

Tạo **một bộ template web hoàn chỉnh** dùng **HTML / CSS / JavaScript thuần**, tối ưu cho:

* Copy & reuse nhanh
* Responsive (mobile / tablet / desktop)
* Dark / Light mode
* Animation mượt
* Không dùng React / Vue / framework SPA

Template dùng cho **admin dashboard / CRUD / web app nội bộ**.

---

## 1️⃣ Công nghệ & thư viện bắt buộc

### Core UI

* Tailwind CSS (CDN)
* DaisyUI (themes: light, dark)
* Remix Icon

### Animation

* animate.css (page, modal, toast)
* Tailwind transition utilities

### Data

* simple-datatables (dùng jQuery)

### Utility

* axios (HTTP)
* dayjs (date/time)
* JavaScript thuần (ES6)

❌ KHÔNG dùng:

* React, Vue, Angular
* Bootstrap
* build tool (webpack, vite…)

---

## 2️⃣ Cấu trúc thư mục BẮT BUỘC

```txt
template/
├── pages/
│   ├── blank.html
│   ├── dashboard.html
│   ├── table.html
│   ├── form.html
│   ├── auth-login.html
│   ├── auth-register.html
│   ├── profile.html
│   └── settings.html
│
├── css/
│   └── custom.css
│
├── js/
│   ├── app.js
│   ├── theme.js
│   ├── datatable.js
│   ├── modal.js
│   └── toast.js
│
└── index.html   (redirect hoặc dashboard)
```

---

## 3️⃣ Layout CHUNG cho tất cả page

### Layout phải có:

* Navbar (fixed top)
* Sidebar / Drawer

  * Desktop: luôn mở
  * Mobile: toggle button
* Main content
* Footer

### Yêu cầu:

* Responsive 100%
* Sidebar collapse trên mobile
* Layout dùng DaisyUI drawer
* Dùng Remix Icon cho menu

---

## 4️⃣ Page bắt buộc & nội dung chi tiết

---

### 🧱 `blank.html` (PAGE QUAN TRỌNG NHẤT)

👉 Dùng làm **base copy** cho page mới

Chỉ chứa:

* Navbar
* Sidebar
* Footer
* Main content rỗng (placeholder)

❌ KHÔNG:

* Table
* Form
* Chart
* JS đặc biệt

✅ Chỉ layout + theme + responsive

---

### 📊 `dashboard.html`

* Cards (stats)
* Badge status
* Progress
* Table đơn giản
* Animation khi load page

---

### 📋 `table.html`

* DataTable (simple-datatables)
* Search
* Pagination
* Sort
* Action buttons (edit / delete)
* Responsive table

---

### 📝 `form.html`

* Input, Select, Textarea
* Checkbox, Radio, Toggle
* Validation UI (HTML5)
* Submit loading state
* Disabled state

---

### 🔐 `auth-login.html`

* Login form
* Center layout
* Animate.css fadeIn
* Password toggle show/hide

---

### 🧾 `auth-register.html`

* Register form
* Confirm password
* Responsive form

---

### 👤 `profile.html`

* Avatar
* Info card
* Editable form
* Save / Cancel

---

### ⚙️ `settings.html`

* Theme toggle (dark/light)
* Notification toggle
* Preference options

---

## 5️⃣ Dark / Light Mode (BẮT BUỘC)

### Yêu cầu:

* Toggle button trên navbar
* Lưu state bằng `localStorage`
* DaisyUI theme switching
* Áp dụng cho tất cả page

---

## 6️⃣ Animation rules

* Page load: `animate__fadeIn`
* Modal open/close animation
* Toast slide-in
* Button hover scale nhẹ
* Không lạm dụng animation

---

## 7️⃣ JavaScript rules

* Tách file JS rõ ràng
* Không inline JS trong HTML
* Comment rõ ràng
* Code dễ đọc, dễ copy

---

## 8️⃣ UI / UX rules

* Consistent spacing
* Icon + text cho menu
* Button có icon
* Empty state cho table
* Loading state

---

## 9️⃣ Coding style

* HTML semantic
* Tailwind utility-first
* Không hard-code màu ngoài theme
* Dễ customize

---

## 🔟 Output yêu cầu

AI phải sinh ra:

* **Toàn bộ file HTML**
* **Toàn bộ file JS**
* Code chạy được ngay bằng browser
* Không thiếu file
* Không placeholder mơ hồ

---

## 🎁 Bonus (nếu có)

* Toast component
* Modal confirm delete
* Skeleton loading
* Comment hướng dẫn chỉnh sửa

---

## 📌 Lưu ý cuối

Template này phải:

* Dùng làm **base cho nhiều dự án**
* Dễ mở rộng
* Copy page → đổi content → dùng ngay

--
