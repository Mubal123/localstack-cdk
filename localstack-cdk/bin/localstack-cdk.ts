#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LocalstackCdkStack } from '../lib/localstack-cdk-stack';

const app = new cdk.App();
new LocalstackCdkStack(app, 'MyLocalStack', {
  env: { account: '000000000000', region: 'us-east-1' }
});

