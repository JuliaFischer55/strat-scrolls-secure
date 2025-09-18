# 🚀 Vercel Deployment Guide for Strat Scrolls Secure

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Instructions

### 1. Connect Repository to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project" or "Import Project"
   - Select "Import Git Repository"
   - Find and select `JuliaFischer55/strat-scrolls-secure`
   - Click "Import"

### 2. Configure Build Settings

1. **Framework Preset**
   - Framework Preset: `Vite`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. **Environment Variables**
   Add the following environment variables in Vercel dashboard:

   ```
   NEXT_PUBLIC_CHAIN_ID=11155111
   NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
   NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
   VITE_CHAIN_ID=11155111
   VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY
   VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
   VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
   ```

### 3. Deploy Configuration

1. **Deploy Settings**
   - Branch: `main`
   - Production Branch: `main`
   - Auto-deploy: `Enabled`

2. **Build Configuration**
   - Node.js Version: `18.x`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

### 4. Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - HTTPS will be enabled by default

### 5. Environment-Specific Configuration

#### Development Environment
```bash
# Local development
npm run dev
```

#### Production Environment
```bash
# Production build
npm run build
npm run preview
```

### 6. Post-Deployment Steps

1. **Verify Deployment**
   - Check the deployed URL
   - Test wallet connection
   - Verify all features work correctly

2. **Monitor Performance**
   - Use Vercel Analytics (if enabled)
   - Monitor build logs for any issues

3. **Update Contract Address**
   - After deploying smart contracts to Sepolia
   - Update contract address in `src/lib/contract.ts`
   - Redeploy to Vercel

### 7. Smart Contract Deployment

Before the frontend can interact with contracts:

1. **Deploy to Sepolia**
   ```bash
   npm run compile
   npm run deploy
   ```

2. **Update Contract Address**
   - Copy the deployed contract address
   - Update `CONTRACT_ADDRESS` in `src/lib/contract.ts`
   - Commit and push changes

3. **Redeploy Frontend**
   - Vercel will automatically redeploy on push
   - Or manually trigger deployment in Vercel dashboard

### 8. Troubleshooting

#### Common Issues:

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required env vars are set
   - Check variable names match exactly
   - Verify no trailing spaces

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check RPC URL is accessible
   - Ensure network configuration matches

4. **Contract Interaction Issues**
   - Verify contract is deployed
   - Check contract address is correct
   - Ensure user has test ETH on Sepolia

### 9. Performance Optimization

1. **Build Optimization**
   - Enable Vercel's automatic optimizations
   - Use Vite's build optimizations
   - Minimize bundle size

2. **Caching**
   - Vercel automatically handles caching
   - Configure cache headers if needed

3. **CDN**
   - Vercel provides global CDN
   - No additional configuration needed

### 10. Monitoring and Analytics

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor performance metrics
   - Track user interactions

2. **Error Tracking**
   - Consider adding error tracking service
   - Monitor for runtime errors
   - Set up alerts for critical issues

## Deployment Checklist

- [ ] Repository connected to Vercel
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Initial deployment successful
- [ ] Wallet connection working
- [ ] Smart contracts deployed
- [ ] Contract address updated
- [ ] Final deployment successful
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Performance monitoring enabled

## Support

For issues with deployment:
- Check Vercel documentation
- Review build logs in Vercel dashboard
- Verify all environment variables
- Test locally before deploying

## Security Notes

- Never commit private keys or sensitive data
- Use environment variables for configuration
- Enable HTTPS in production
- Regularly update dependencies
- Monitor for security vulnerabilities
