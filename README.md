<div align="center">
  <img src="https://github.com/user-attachments/assets/6efc8516-bdd2-463f-a97d-e068f4a12980" width="300"/>
</div>

### Driver4U

**Driver4U** is a mobile application designed to provide a location-based transportation service. Users can select their current location and destination to request an Uber ride. The application dynamically calculates and updates the fare based on the distance between the user's current location and their destination.

**Technologies Used:**

- **React Native**: Utilized for building a cross-platform mobile application, ensuring a seamless experience on both iOS and Android devices.
- **TailwindCSS**: Employed to create a modern and responsive user interface, simplifying style management.
- **Expo**: Used to accelerate development with React Native, offering a range of built-in features and simplifying the development process.
- **Expo Router**: Integrated for managing navigation and routing within the application.
- **Redux**: Implemented for state management, ensuring efficient handling of application data and user interactions.
- **Google API for Maps**: Leveraged for location services, enabling accurate mapping and distance calculations.

**Key Features:**

- **Dynamic Fare Calculation**: Automatically adjusts the fare based on the distance between the user's current location and their destination.
- **Location Selection**: Users can easily select their pickup and drop-off points using an intuitive map interface.
- **Real-time Updates**: Provides real-time updates on fare changes and ride status.

**Images**

<div align="center">
<img src="https://github.com/user-attachments/assets/f84bf456-ab11-4bcc-902c-4a0feb084a9c" width='250'/>
<img src="https://github.com/user-attachments/assets/7b117e14-3e65-42d3-aec8-755bbb13082b" width='250'/>
<img src="https://github.com/user-attachments/assets/0c64ea38-f2d0-43f8-ad78-247cb0112a20" width='250'/>
<img src="https://github.com/user-attachments/assets/d6e2cf99-353a-4ee2-b99b-52fcf2b54b90" width='250'/>
<img src="https://github.com/user-attachments/assets/74478e07-6eb8-449f-b6d1-80f61d764a94" width='250'/>
</div>

## Dependencies

| Package Name                                | Version    |
|---------------------------------------------|------------|
| @expo/metro-runtime                        | 3.2.1     |
| @react-navigation/native                   | 6.1.18    |
| @react-navigation/native-stack             | 6.11.0    |
| @reduxjs/toolkit                           | 2.2.7     |
| expo                                        | 51.0.24   |
| expo-status-bar                             | 1.12.1    |
| nativewind                                  | 2.0.11    |
| react                                       | 18.2.0     |
| react-dom                                   | 18.2.0     |
| react-native                                | 0.74.3     |
| react-native-dotenv                         | 3.4.11    |
| react-native-google-places-autocomplete     | 2.5.6     |
| react-native-heroicons                      | 4.0.0     |
| react-native-maps                           | 1.17.3    |
| react-native-maps-directions                | 1.9.0     |
| react-native-safe-area-context              | 4.10.5     |
| react-native-screens                        | 3.31.1     |
| react-native-svg                            | 15.2.0     |
| react-native-web                            | 0.19.10   |
| react-redux                                 | 9.1.2     |

## DevDependencies

| Package Name                                | Version    |
|---------------------------------------------|------------|
| @babel/core                                | 7.25.2    |
| @babel/runtime                             | 7.25.0    |
| metro-react-native-babel-preset             | 0.77.0    |
| tailwindcss                                | 3.3.2     |

## ENV - react-native-dotenv [3.4.11]
```
GOOGLE_KEY = YOUR_API_KEY
```

## Installation

To get started with Driver4U, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-repository-url.git
    cd your-repository-folder
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    GOOGLE_KEY=YOUR_API_KEY
    ```

4. **Run the Application:**
    ```bash
    npm start
    ```

5. **Run the Application on a Mobile Device/Emulator:**
    ```bash
    npm run android  # For Android
    npm run ios      # For iOS
    ```
    
## Usage

1. **Open the App:** Launch the application on your mobile device or emulator.
2. **Select Location:** Use the map interface to select your current location and destination.
3. **Request a Ride:** Tap on the request button to book a ride.
4. **View Fare:** The app will calculate and display the fare based on your selected locations.
5. **Track Ride:** Monitor real-time updates on your ride status.

## Contact

For any questions or support, please contact:

- **Email:** doguhannilt@gmail.com
- **GitHub Issues:** [Submit an issue](https://github.com/doguhannilt/Driver4U)

