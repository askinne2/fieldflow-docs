// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.getfieldflow.io',
	integrations: [
		starlight({
			title: 'FieldFlow Docs',
			logo: {
				/* dark = image when docs are in dark mode; light = when in light mode */
				dark: './src/assets/fieldflow-logo-dark-nav.svg',
				light: './src/assets/fieldflow-logo.svg',
				alt: 'FieldFlow',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/askinne2/fieldflow-docs' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'Sign Up', slug: 'getting-started/sign-up' },
						{ label: 'Connect Google Sheets', slug: 'getting-started/connect-google-sheets' },
						{ label: 'Create a Project', slug: 'getting-started/create-project' },
						{ label: 'Your First Sync', slug: 'getting-started/first-sync' },
					],
				},
				{
					label: 'Field Mapping',
					items: [
						{ label: 'Overview', slug: 'field-mapping/overview' },
						{ label: 'Field Types Reference', slug: 'field-mapping/field-types' },
					],
				},
				{
					label: 'Display & Layout',
					items: [
						{ label: 'Card Layouts', slug: 'display/card-layouts' },
						{ label: 'Detail Pages', slug: 'display/detail-pages' },
						{ label: 'Colors & Branding', slug: 'display/colors-and-branding' },
					],
				},
				{
					label: 'Filters & Search',
					items: [
						{ label: 'Taxonomies', slug: 'filters-and-search/taxonomies' },
						{ label: 'Search & Sorting', slug: 'filters-and-search/search-and-sorting' },
					],
				},
				{
					label: 'Quiz Flow',
					items: [
						{ label: 'Overview', slug: 'quiz-flow/overview' },
						{ label: 'Creating a Quiz', slug: 'quiz-flow/creating-a-quiz' },
						{ label: 'Tag Mapping', slug: 'quiz-flow/tag-mapping' },
					],
				},
				{
					label: 'Syncing',
					items: [
						{ label: 'Manual Sync', slug: 'syncing/manual-sync' },
						{ label: 'Automatic Sync', slug: 'syncing/automatic-sync' },
						{ label: 'Sync History', slug: 'syncing/sync-history' },
					],
				},
				{
					label: 'Publishing',
					items: [
						{ label: 'API Keys', slug: 'publishing/api-keys' },
						{ label: 'Sharing Links', slug: 'publishing/sharing-links' },
						{ label: 'Embed Code', slug: 'publishing/embed-code' },
					],
				},
				{
					label: 'Embedding',
					items: [
						{ label: 'WordPress', slug: 'embedding/wordpress' },
						{ label: 'Webflow', slug: 'embedding/webflow' },
						{ label: 'Squarespace', slug: 'embedding/squarespace' },
						{ label: 'Custom HTML', slug: 'embedding/custom-html' },
						{ label: 'Advanced Options', slug: 'embedding/advanced-options' },
					],
				},
				{
					label: 'Account & Billing',
					items: [
						{ label: 'Plans & Pricing', slug: 'billing/plans' },
						{ label: 'Managing Your Subscription', slug: 'billing/managing-subscription' },
						{ label: 'Team Management', slug: 'billing/team' },
						{ label: 'Account Settings', slug: 'billing/settings' },
					],
				},
			],
		}),
	],
});
