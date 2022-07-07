package com.reactnativebackgroundsecure;

import android.app.Activity;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;

import android.view.WindowManager;
/**
 * This is where the module implementation lives
 * The exposed methods can be defined in the `turbo` and `legacy` folders
 */
public class BackgroundSecureModuleImpl  {
  public static final String NAME = "BackgroundSecure";

  public static void blockScreen(Activity activity) {
          if (activity != null) {
              activity.runOnUiThread(new Runnable() {
                  @Override
                  public void run() {
                      activity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
                  }
              });
          }
  }

  public static void unblockScreen(Activity activity) {
        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
                }
            });
        }
  }
}
