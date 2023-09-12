import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: [
                {name: 'Finish project', completed: false, tag: 'tag1', id: 1},
                {name: 'Read chapter 4', completed: false, tag: 'tag2', id: 2},
                {name: 'Turn in homework', completed: false, tag: 'tag3', id: 3},
                {name: 'Learn something new', completed: false, tag: 'tag3', id: 4},
            ],
            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.complete),
                inProgress: this.assignments.filter(assignment => !assignment.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}