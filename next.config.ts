import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.REPO_NAME || '<repository-name>'; // Replace <repository-name> with your repo name if not using .env

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
  basePath: isGitHubPages ? `/${repoName}` : undefined,
};

export default nextConfig;
