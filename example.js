var jobs = [
  {
    title: 'Analog/RF SPICE Modeling Engineer',
    description: 'Responsible for developing models for RF and Analog technologies for active and passive devices.',
    department: 'Engineering',
    location: 'California, Newport Beach',
    link: 'http://chc.tbe.taleo.net/chc01/ats/careers/requisition.jsp;jsessionid=3286D7C705AE7D158FC127CD80DC787D?org=JAZZSEMI&cws=1&rid=47'
  },
  {
    title: 'Device Engineering Intern – R&D',
    description: 'Student will primarily help with DC, AC and RF characterization of active and passive devices at the wafer level...',
    department: 'Engineering',
    location: 'California, Newport Beach',
    link: 'http://chc.tbe.taleo.net/chc01/ats/careers/requisition.jsp?org=JAZZSEMI&cws=1&rid=43'
  },
  {
    title: 'Fab Operator Assistant',
    description: 'Perform various assigned tasks within wafer fabrication area. Work from specific written and oral instructions, and written procedures.',
    department: 'Operations',
    location: 'California, Newport Beach',
    link: 'http://chc.tbe.taleo.net/chc01/ats/careers/requisition.jsp?org=JAZZSEMI&cws=1&rid=39'
  }
]



var listJobs = jobs.forEach(el => {
  var info = '<div><h1>'+ el.title + '</h1><p>' + el.description + '</p><a href="'+ el.link +'" class="mdl-button mdl-js-button mdl-button--raised">More Details</a><br><br><hr></div>'
  $('#availableJobs').append(info);
});
