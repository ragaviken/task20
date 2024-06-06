import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class DatePickerAutomation {
    public static void main(String[] args) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // Create a new instance of the ChromeDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Maximize the browser window
            driver.manage().window().maximize();

            // Navigate to the URL
            driver.get("https://jqueryui.com/datepicker/");

            // Switch to the iframe that contains the datepicker
            driver.switchTo().frame(driver.findElement(By.className("demo-frame")));

            // Open the datepicker
            WebElement datepicker = driver.findElement(By.id("datepicker"));
            datepicker.click();

            // Select the next month from the datepicker
            WebElement nextMonthButton = driver.findElement(By.className("ui-datepicker-next"));
            nextMonthButton.click();

            // Select the date "22" from the datepicker
            WebElement dateToSelect = driver.findElement(By.xpath("//a[text()='22']"));
            dateToSelect.click();

            // Print the selected date on the console
            String selectedDate = datepicker.getAttribute("value");
            System.out.println("Selected date: " + selectedDate);
        } finally {
            // Close the browser window and quit the WebDriver instance
            driver.quit();
        }
    }
}
