# Scrapping

## Setup

```bash
yarn install
yarn dev
```

## Fonctionnement
Comme vous pourrez le constater, quand on lance le projet, les relevés de compte et les opérations bancaires sont déjà présents dans la base de données. <br> J'ai fait comme si le client devait déposer ses relevés de compte en amont de la vérification du comptable.
Toutes les opérations bancaires sont également sauvegardées en amont avec la valeur `checked: false`. <br>
Le comptable peut ensuite faire sa vérification et s'il n'y a pas d'erreurs la valeur `checked` des opérations passera ensuite sur `true`.
S'il y a des erreurs le comptable peu toujours <strong>supprimer / ajouter / modifier</strong> les opérations bancaires renvoyées par le scrapping avant de retenter une vérification. <br>
La validation permet de vérifier les opérations retournées par le scrapping sur un relevé de compte complet, c'est pour cela que l'on doit ajouter le mois et l'année dans la requête

En espérant que cela vous plaira :clap:

## Routes

### Relevés bancaires

Récupere tout les relevés de compte
```
GET http://localhost:8000/balances
```

### Opérations bancaires récupérées du scrapping

Récupere toute les opérations bancaires avec la possibillitée de les filtrer par mois et année
```
GET http://localhost:8000/movements?month=0&year=2023
```

Permet d'ajouter une nouvelle opération bancaire manuellement
```
POST http://localhost:8000/movements
```
```json
{
  "label": "lorem",
  "date": "12/02/2023",
  "amout": -200
}
```
Permet de modifier le montant d'une opération bancaire
```
PUT http://localhost:8000/movements/:id/amount
```
```json
{
  "amout": -200
}
```
Permet de supprimer une opération bancaire
```
DELETE http://localhost:8000/movements/:id
```
Permet de valider les opérations bancaires en s'appuyant sur les relevés de compte envoyés par le client
```
PUT http://localhost:8000/movements/validation
```
```json
{
  "month": 0,
  "year": 2023
}
```

## Dernière note
J'ai utilisé la session pour enregistrer les données bien qu'une BDD aurait été plus appropriée. Je me suis dit que cela rendrait le test plus simple à tester pour vous.


