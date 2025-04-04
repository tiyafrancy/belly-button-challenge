# Module 14 Challenge

In this assignment, we have build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
                
To complete this challenge, we are provided with index.html, samples.json which contains the dataset, and we have written the code in app.js file.
                  
We use D3 library to read in samples.json from the URL     
**const URL = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";** first we assign the URL into a variable and then use that variable to access the data.  
**d3.json(URL).then((data) => {}**             
              
We created a horizontal bar chart with a dropdwon menu to display the top 10 OUTs found in that individual.     




![Screenshot 2025-04-03 at 11 17 02 PM](https://github.com/user-attachments/assets/c22ffa3a-0580-449a-8a22-51fc2f3e897c)


![Screenshot 2025-04-03 at 11 21 37 PM](https://github.com/user-attachments/assets/ca42ea28-c442-4753-bb0f-d3ed6b80c096)


Then we created a bubble chart that displays each sample.      


![Screenshot 2025-04-03 at 11 18 20 PM](https://github.com/user-attachments/assets/408bde65-7f63-4f44-afd4-56f11b4ba332)

We also displays the sample's metadata, i.e an individuals demographic information in a panel.     

![Screenshot 2025-04-03 at 11 21 04 PM](https://github.com/user-attachments/assets/7e1e3eb6-6863-4fca-8c08-417e6d1888da)

To see the dashboard, click the **go live** button at the bottom of the VS Code.     <img width="104" alt="Screenshot 2025-04-03 at 11 28 09 PM" src="https://github.com/user-attachments/assets/7962995d-9249-435b-baf6-b59d8185983c" />









