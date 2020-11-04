
This article will go over using Volley to make API requests in Android applications.

### Introduction
Networking in mobile applications has been around since their existence. Information is either sent or received. In the early days, networking was done on the main thread. This proved to be ineffective due to the NetworkOnMainThreadException error due to the different SDK levels. Also, running a long task on the UI thread can “freeze” the interface of a user making it simply not user friendly. When the Honeycomb version was released, making network requests on the main thread stopped. 
With time, different classes and libraries such as AsyncTask, Retrofit, Volley, etc were introduced to carry out networking in mobile applications.

Volley is an HTTP library that is used for caching and making a network request in Android applications. This library was developed by Google in 2013 due to the absence of an Android SDK that can carry out networking without interfering with the user experience of an application. An API is software that contains data used for communication between two applications. Most applications use API to receive information.

In this article, we will create an application that shows the Corona Virus statistics of the world using Volley for networking.

### Classes used in Volley.
- Request - This class contains the necessary information for making API requests.
- Request Queue – A class used to dispatch network requests.

### Uses of Volley
Volley can be used to perform the following tasks:
- It manages caching and processing of network requests.

- It manages cache and memory management.

- It manages request queuing and prioritization.

- It enables customization of the library to fit our needs.



### Advantages of Volley.

- It saves time from writing the same network/cache code over and over.

- It can run many concurrent network connections.

- It provides tracing and debugging tools.

- It enables automatic scheduling of network connections.

- It enables catching.

- It supports `OkHTTP`.


### Disadvantages of Volley.
- It is not suitable for streaming and large downloads.

- It does not have proper documentation yet.

- It is slower compared to [Retrofit](https://square.github.io/retrofit/).

- It is has a complex code structure.

### Useful Terminology
- [Volley](https://developer.android.com/training/volley) - an HTTP library that is used for caching and making a network request in Android applications.
- [API](https://en.wikipedia.org/wiki/API) - software that contains data used for communication between two applications.
- [JSON](https://medium.com/swlh/what-is-json-used-for-in-javascript-programming-9d71284359a9) - (JavaScript Object Notation) is a lightweight data-interchange format..
- [Permission](https://developer.android.com/guide/topics/permissions/overview) -  statements which allow an android application to access different properties which contain user's sensitive information.

### Prerequisites
- You should have [Android Studio](https://developer.android.com/studio) installed.
- Have basic knowledge about APIs and making Requests. 
- Have basic knowledge about REST APIs, JSON, and making Requests.
- Have basic knowledge and understanding of XML and Java programming language.

#### Step 1 – Create a New Project
-  Open Android Studio. Select Start new Android Studio Project → Empty Activity. We will name the project **CovidTrackerVolley**. Click Finish and wait for the project to build.


![Name the project](/engineering-education/making-volley-requests-in-android/name.jpg)

#### Step 2 – Design a Layout
In this step, we will design the UI for the layout of our application.

Open activity_main.xml and add the following lines of code;

```xml
<?xml version="1.0" encoding="utf-8"?>

<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"

 xmlns:app="http://schemas.android.com/apk/res-auto"

 xmlns:tools="http://schemas.android.com/tools"

 android:layout_width="match_parent"

 android:layout_height="match_parent"

 tools:context=".MainActivity"

 android:background="@color/white">

 <TextView

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:text="Total Cases in the World"

 android:textSize="22dp"

 android:textStyle="bold"

 android:textColor="@color/black"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.494"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.225" />

 <TextView

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:text="Total Recovered in the World"

 android:textSize="22dp"

 android:textStyle="bold"

 android:textColor="@color/black"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.494"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.39" />

 <TextView

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:text="Total Deaths in the World"

 android:textSize="22dp"

 android:textStyle="bold"

 android:textColor="@color/black"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.518"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.559" />

 <TextView

 android:id="@+id/newCasesWorld"

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:textColor="@color/teal_200"

 android:textSize="22dp"

 android:textStyle="bold"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.498"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.296" />

 <TextView

 android:id="@+id/newDeathsWorld"

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:textColor="@color/teal_200"

 android:textSize="22dp"

 android:textStyle="bold"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.498"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.654" />

 <TextView

 android:id="@+id/newRecoveredWorld"

 android:layout_width="wrap_content"

 android:layout_height="wrap_content"

 android:textColor="@color/teal_200"

 android:textSize="22dp"

 android:textStyle="bold"

 android:text="0"

 app:layout_constraintBottom_toBottomOf="parent"

 app:layout_constraintEnd_toEndOf="parent"

 app:layout_constraintHorizontal_bias="0.498"

 app:layout_constraintLeft_toLeftOf="parent"

 app:layout_constraintRight_toRightOf="parent"

 app:layout_constraintStart_toStartOf="parent"

 app:layout_constraintTop_toTopOf="parent"

 app:layout_constraintVertical_bias="0.473" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
**Note: Some of the text views do not contain any content. This is because the information to be displayed will be obtained from the API. Thus it is important to leave it blank.**


### Step 3 – Adding Volley to our Application.
Add the following dependency to your app module-level `build.gradle` file:
```gradle
dependencies{ 

 implementation 'com.android.volley:volley:1.1.0'

}
```

In your AndroidManifest.xml add internet permission:

```manifest
<uses-permission

 android:name="android.permission.INTERNET />
 ```

This permission enables our application to access the internet.

#### Step 4 – Making the API Requests
In this step, we will make an API request.

We will be using the [NovelCOVID](https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest) API which contains live Corona Virus statistics.

In our MainActivity class, create an object for the TextViews in our Resource file.

```java
private TextView totalCasesWorld, totalDeathsWorld, totalRecoveredWorld;
```
In our `onCreate` method initialize the TextViews and invoke the `getData` method.

```java
//Initialize the objects

totalCasesWorld = (TextView) findViewById(R.id.newCasesWorld);

totalDeathsWorld = (TextView) findViewById(R.id.newDeathsWorld);

totalRecoveredWorld=(TextView)findViewById(R.id.newRecoveredWorld);

getData();
```
Now let's create a `getData` method outside the `onCreate method.` The `getData` method is the most significant task. This is because it contains the code that will fetch data from the API to be used in our app.

In the `getData` method, create a `StringRequest` and assign the NovelCOVID API Url (https://corona.lmao.ninja/v2/all) to a `String.` We are using the `StringRequest` because we want to return information in `String` form.

**Note: It is a good practice to test run test requests to ensure an API contains the information required. You can use platforms such as [Postman](https://www.postman.com/) to do this.**

Next, we will create a Response Listener which will contain an onResponse method. In the onResponse method, we will create a JSONObject class. This class will pass the data from the API then set the data from API to the respective views. 

**Note: This should be done within a try block.**
**The parameters inside the getString()should be the same as the name given in the JSON format.**

In the `onErrorResponse` method, we will show a `Toast` message in case of an error.

```java
String myUrl = "https://corona.lmao.ninja/v2/all";

StringRequest myRequest = new StringRequest(Request.Method.GET, myUrl,

 new Response.Listener<String>() {

 @Override

 public void onResponse(String response) {

 try {

 JSONObject myJsonObject = new JSONObject(response.toString());

 totalCasesWorld.setText(

 jsonObject.getString(

 "cases"));

 totalRecoveredWorld.setText(

 jsonObject.getString(

 "recovered"));

 totalDeathsWorld.setText(

 jsonObject.getString(

 "deaths"));

 } catch (JSONException e) {

 e.printStackTrace();

 }

 }

 },

 new Response.ErrorListener() {

 @Override

 public void onErrorResponse(VolleyError volleyError) {

 Toast.makeText(

 MainActivity.this,

volleyError.getMessage(),

 Toast.LENGTH_SHORT)

 .show();

```
Lastly, outside the `getData` method initialize the `RequestQueue.`

```java
RequestQueue requestQueue
        = Volley.newRequestQueue(this);
requestQueue.add(myRequest);
```

We are Done! Let’s run the app.

![CovidTrackerVolley](/engineering-education/making-volley-requests-in-android/app.jpg)

Access the source code on [Github](https://github.com/BrianaNzivu/EngineeringEducation/tree/main/CovidTrackerVolley).

Download the sample APK on Google [Drive](https://drive.google.com/file/d/1Gsn9P8KxrXcDXLR4DrUYu1o7i3VVMC52/view?usp=sharing).
