# Astuces Typescript 

Pour pouvoir vérifier les props passés, Typescript frce l'utilisation du spread operateur ce qui garantit que les valeurs sont transmises indépendamment
et permet d'en verifier le type. 

Problème N°1 : Lorsque j'ai voulu passer un tableau de cette manière ne props puis mapper dessus, c'était impossible car le spread operator passait uniquement mes objest contenus dans le tableau et pas le tableau lui-même 

Solution : Dans le composant recevant la props, utiliser Object.values sur les props pour obtenir un nouveau tableau mappable. 