import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GuviAutomation {
    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // Initialize WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Launch the website
            driver.get("https://www.guvi.in/");

            // Maximize the browser window
            driver.manage().window().maximize();

            // Locate the Signup button and click on it
            WebElement signupButton = driver.findElement(By.linkText("Sign Up"));
            signupButton.click();

            // Fill in the signup form
            driver.findElement(By.id("name")).sendKeys("Your Name");
            driver.findElement(By.id("email")).sendKeys("your.email@example.com");
            driver.findElement(By.id("password")).sendKeys("YourPassword");
            driver.findElement(By.id("confirmPassword")).sendKeys("YourPassword");

            // Click the Signup button to submit the form
            driver.findElement(By.xpath("//button[text()='Signup']")).click();

           
            // Locate the Login button and click on it
            WebElement loginButton = driver.findElement(By.linkText("Login"));
            loginButton.click();

            // Fill in the login form
            driver.findElement(By.id("email")).sendKeys("your.email@example.com");
            driver.findElement(By.id("password")).sendKeys("YourPassword");

            // Click the Login button to submit the form
            driver.findElement(By.xpath("//button[text()='Login']")).click();

            // Wait for the page to load and verify that the user is logged in successfully
            Thread.sleep(5000); // Adjust sleep time as necessary
            // Add verification code here (if necessary)

        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            // Close the browser
            driver.quit();
        }
    }
}
