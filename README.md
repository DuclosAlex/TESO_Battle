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

 - 12/07/2023 

 I forget to keep my dev log update... So, a lot of work make. With back-end update, i now fetch stage with ennemies so i start work on dispay each stage for each campain ( 3 at start, Domain, Pact and Alliance). Big trouble for making modal on stage page. The purpose was to click on stahe and display in modal ennemies list for this stage and also character from player. With the character, i will work on a drag and drop system to make party for battle, but i spend a long day just to make the open/close system working. 

 I use this doc : https://blog.logrocket.com/build-modal-with-react-portals/ and also React Doc, but for some reason i could never close my modals. She open but the close button was not working. Following the doc, i have à stageBox who has a button openning the modal. This modal is a component using createPortail hook, and he takes two params, isOpen who is the modal statut and onClose who is a fonction that change the state of showModal in stageBox. Just that... But no, it doesn't work... after trying many things, i take a 15mn break and when i came i try again and it all work perfectly... i think i have some issu with next updating in real time the source code.. i don't know... Still, it's working, so yeah !!! Next step is to display the list ennemies, make the road in back-end to find allChracter and put the drag and drop feature. 

 Also i notice that i understand better typescript. Well, i don't make mistakes all the time and i have less error than usual, so i save the thinking process somewhere in my head. 

 - 22/06/2023

 Start work on menu and navigation, start use layout and fetch, catch data from API ok ! Made link for campaign menu. Had to think about how to construct stage. Component or page ? Should i fetch stage with campaign data and find a way to send it in stage component/page ( like props ?) Or should i fetch stage data when user choose campaign by fetching with campaign id ? Maybe last method will be better, i can try loading screen with next. 

 - 19/06/2023 

End of basics system in battle mode. We can choose skills, character and/or ennemies. We can see effect of skills on ennemies life point. Situation where ennemies life point came to 0 are handle with a red cross cover ennemyBox. BattleLog are made after each action with the character name, the skill effect and the target ennemy name. i make service to handle skill effect dispatch and skill lg dispatch cause i want to avoid to many code in components. Some refacto still can be done, but it will be for later. 

Next step is to make step back and begin work in battle menu and main menu. I have to make fake test choice for battle and characters, and with that i can create a store for team character and team ennemy and work on timer and speed management. Also, maybe start working on character menu. If all of this work and main menu base work, i could also work on home page and signin/signup feature ( and on back-end ). 





