import { Command } from '@oclif/core';
class World extends Command {
    async run() {
        this.log('hello world! (./src/commands/hello/world.ts)');
    }
}
World.args = {};
World.description = 'Say hello world';
World.examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
];
World.flags = {};
export default World;
