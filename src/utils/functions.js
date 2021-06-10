export async function setupOptions(channels) {
    var opts = []
	for (var i = 0; i < channels.size; i++) {
		// Categories
        var outputCategory = "<optgroup label=" + channels.Category + "/>";
        console.log(outputCategory);

        opts.push(outputCategory);

		for (var j = 0; j < channels['children'].size; j++) {
			// Channels
            var outputChannel = "<option value=" + channels[i]['children'].id[j] + ">" + channels[i]['children'].name[j] + "</option>";
            console.log(outputChannel);
            opts.push(outputChannel);
		}
	}
    return console.log(opts);
}