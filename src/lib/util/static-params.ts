/**
 * Utility function for generateStaticParams during GitHub Pages builds
 * Returns empty array to skip generating pages for dynamic routes
 */
export function getStaticParamsForGitHubPages() {
  if (process.env.GITHUB_PAGES === 'true') {
    return []
  }
  return null // Indicates normal behavior
}
