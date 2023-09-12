export default {
    template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading"/>
            </h2>
            <slot/>
        </div>
    `,
    props: {
        heading: String
    }
}