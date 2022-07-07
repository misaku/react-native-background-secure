package com.reactnativebackgroundsecure;

import android.app.Activity;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BackgroundSecureModule extends ReactContextBaseJavaModule {
  public static final String NAME = BackgroundSecureModuleImpl.NAME;

  BackgroundSecureModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return BackgroundSecureModuleImpl.NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void blockScreen() {
    final Activity activity = getCurrentActivity();
    BackgroundSecureModuleImpl.blockScreen(activity);
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void unblockScreen() {
    final Activity activity = getCurrentActivity();
    BackgroundSecureModuleImpl.unblockScreen(activity);
  }
}
