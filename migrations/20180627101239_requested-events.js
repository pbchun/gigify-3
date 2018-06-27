
exports.up = function(knex, Promise) {
    return knex.schema.createTable('event', table => {
        table.increments();
        table.text('date');
        table.text('artist');
        table.text('contactName');
        table.text('phone');
        table.text('email');
        table.text('website');
        table.text('musicSample');
        table.text('image');
        table.text('description');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('event')
};
