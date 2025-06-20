# LocalStack CDK Project

This project demonstrates deploying AWS resources such as Lambda and API Gateway using AWS CDK and LocalStack for local development and testing.

## 📦 Fitur
- Lambda function (Hello)
- API Gateway Proxy
- DynamoDB table (MyTable)
- Full local testing via LocalStack

## 🚀 Cara Menjalankan

1. Jalankan LocalStack:

```bash
docker-compose up -d
```

2. Deploy CDK stack ke LocalStack:

```bash
cdklocal deploy --require-approval never --app "npx ts-node bin/localstack-cdk.ts"
```

3. Tes API:

```bash
curl -X POST http://localhost:4566/restapis/<API_ID>/prod/_user_request_   -H "Content-Type: application/json"   -d '{"id": "1", "name": "Data Test", "status": "aktif"}'
```

4. Cek DynamoDB:

```bash
awslocal dynamodb scan --table-name MyTable
```

## 🔗 Struktur Folder

- `bin/` – Entry point CDK
- `lib/` – CDK Stack
- `lambda/` – Source Lambda function
- `cdk.json`, `package.json` – Konfigurasi CDK dan proyek

## 📃 Lisensi

MIT License

