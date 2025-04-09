import { test, expect, type Page } from '@playwright/test';


const loginWithUsernameAndPassword = async (page: Page) => {
    await page.getByLabel('Email:').fill('user@test.com');
    await page.getByLabel('Password:').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
}
test('page should has heading User authenticate demo', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'User authenticate demo' })).toBeVisible();
})

test('should allow user login and see welcome page', async ({ page }) => {
    await page.goto('/');

    await loginWithUsernameAndPassword(page)

    await expect(page).toHaveURL('/welcome');
    await expect(page.getByText('Welcome user@test.com')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible()

})

test('should allow user logout', async ({ page }) => {
    await page.goto('/');

    loginWithUsernameAndPassword(page)

    await page.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL('/login');
})


