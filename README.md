Berikut isi lengkap `README.md` yang bisa kamu **paste langsung di Git Bash menggunakan `nano README.md`**:

---

```markdown
# 🚀 LocalStack CDK Project

Proyek ini menggunakan AWS CDK untuk mensimulasikan layanan AWS secara lokal menggunakan **LocalStack**. Fitur yang diuji termasuk **Lambda**, **API Gateway**, dan **DynamoDB**.

---

## 📦 Struktur Proyek

```

localstack-cdk/
├── bin/
│   └── localstack-cdk.ts         # Entry point CDK
├── lib/
│   └── localstack-cdk-stack.ts   # Stack definisi Lambda + API + DynamoDB
├── lambda/
│   ├── hello.ts                  # Lambda handler
│   └── handler.ts                # Fungsi tambahan (opsional)
├── cdk.json
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🛠️ Langkah Instalasi

1. **Clone repo**
```bash
git clone https://github.com/USERNAME/localstack-cdk.git
cd localstack-cdk
````

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan LocalStack**

```bash
docker-compose up -d
```

4. **Deploy CDK ke LocalStack**

```bash
cdklocal bootstrap
cdklocal deploy --require-approval never --app "npx ts-node bin/localstack-cdk.ts"
```

---

## 🔁 Tes API Gateway & Lambda

### 🔸 POST data ke Lambda

```bash
curl -X POST http://localhost:4566/restapis/<API_ID>/prod/_user_request_ \
  -H "Content-Type: application/json" \
  -d '{"id": "1", "name": "Contoh", "status": "aktif"}'
```

### 🔸 GET data dari Lambda

```bash
curl http://localhost:4566/restapis/<API_ID>/prod/_user_request_
```

### 🔸 Scan isi DynamoDB

```bash
awslocal dynamodb scan --table-name MyTable
```

---

## 🧯 Solusi Error Umum

| Masalah                               | Solusi                                                                                                                |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `read ECONNRESET` saat deploy         | Jalankan `docker-compose down && docker-compose up -d`, lalu deploy ulang                                             |
| `table not found`                     | Pastikan stack berhasil `cdklocal deploy` dan gunakan nama tabel yang sesuai                                          |
| `jq: command not found`               | Jalankan `sudo apt install jq` (Linux) atau gunakan [jq-win64.exe](https://github.com/stedolan/jq/releases) (Windows) |
| `npm warn cli` versi Node tidak cocok | Gunakan Node.js `>=20.17.0` atau `>=22.9.0`                                                                           |
| `remote origin already exists`        | Gunakan `git remote set-url origin https://github.com/USERNAME/repo.git`                                              |

---

## 📌 Tools

* [LocalStack](https://localstack.cloud/)
* [AWS CDK](https://docs.aws.amazon.com/cdk/)
* [Git Bash](https://gitforwindows.org/)
* [Docker](https://www.docker.com/)

---

## 🧠 Penulis

* 👤 Nama: Muhammad Iqbal
* 📅 Tanggal: Juni 2025

---

````

Setelah selesai paste di `nano`, lakukan:
- `CTRL + O` → `ENTER` → simpan
- `CTRL + X` → keluar

Lalu jalankan:

```bash
git add README.md
git commit -m "📄 Tambah README dokumentasi lengkap"
git push
````

Kalau perlu saya bantu buat skrip otomatis push + isi README-nya, tinggal bilang saja ya.
