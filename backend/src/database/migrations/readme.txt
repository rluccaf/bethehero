
1 - criar a migration usando: npx knex migrate:make nome_migration
2 - salvar no banco usando: npx knex migrate:latest
* - desfazer a ultima migrate: npx knex migrate:rollback
* - listar migrates executadas: npx knex migrate:status