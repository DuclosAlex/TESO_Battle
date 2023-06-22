# TESO_Battle
React/Next Project on TESO universe with Nest.js API

## First part : Base Feature

  - Can select character in battle DONE
  - Can select skill in Battle  DONE
  - Add log after actions DONE
  - Can select ennemies in Battle Done
  - Add speed system for actions
  - Add life point system Done
  - Add Main Menu
  - Add character Menu
  - Add battle Menu 



## Dev Log 

 - 22/06/2023

 Start work on menu and navigation, start use layout and fetch, catch data from API ok ! Made link for campaign menu. Had to think about how to construct stage. Component or page ? Should i fetch stage with campaign data and find a way to send it in stage component/page ( like props ?) Or should i fetch stage data when user choose campaign by fetching with campaign id ? Maybe last method will be better, i can try loading screen with next. 

 - 19/06/2023 

End of basics system in battle mode. We can choose skills, character and/or ennemies. We can see effect of skills on ennemies life point. Situation where ennemies life point came to 0 are handle with a red cross cover ennemyBox. BattleLog are made after each action with the character name, the skill effect and the target ennemy name. i make service to handle skill effect dispatch and skill lg dispatch cause i want to avoid to many code in components. Some refacto still can be done, but it will be for later. 

Next step is to make step back and begin work in battle menu and main menu. I have to make fake test choice for battle and characters, and with that i can create a store for team character and team ennemy and work on timer and speed management. Also, maybe start working on character menu. If all of this work and main menu base work, i could also work on home page and signin/signup feature ( and on back-end ). 





