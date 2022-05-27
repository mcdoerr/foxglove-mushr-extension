# MushrTeleop

## _A Foxglove Studio Extension_

This extension adds 3 buttons in a custom panel so that the [Mushr package](https://mushr.io/) can differentiate published points. The buttons are "Set Pose", "Set Goal", and "Set Pose Estimate". Selecting a button causes the extension to publish the type of point being published to the Mushr Backend through ROS. 

Each button functions as:
- Set Pose -> Set the position and orientation of the robot. Only use in sim.
- Set Goal -> Set a navigation goal for the robot. For use in sim and real.
- Set Pose Estimate -> Set a position estimate for the particle filter. This should be used on large maps if the particle filter cannot properly infer the position. Once the estimate is set, the particle filter should correctly snap to the actual position. For use in real. 

To locally develop, run `yarn local-install` at the base directory and refresh foxglove. A panel should appear in the `Add Panel` dropdown with an option for MushrTeleop.