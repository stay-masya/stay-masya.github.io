$(window).load(() => {
  $("button.MuiFab-root:contains('Fill')").click(() => {
    console.log(window.data)

    const fieldNameFieldChangeFuncMap = {
      'name': window.fieldChangeFuncMap.name,
      'email': window.fieldChangeFuncMap.email,
      'firstPhone': window.fieldChangeFuncMap.phone1,
      'secondaryPhone': window.fieldChangeFuncMap.phone2,
      'desc': window.fieldChangeFuncMap.desc,
    }
    
    const fieldNameList = [
      'name',
      'email',
      'firstPhone',
      'secondaryPhone',
      'desc',
    ]

    $(".MuiInputBase-input").each(function (index) {
      const fieldName = fieldNameList[index]
      fieldNameFieldChangeFuncMap[fieldName](window.data[fieldName])
    })

    window.clearWorkerList()

    window.data.workers.forEach(worker => {
      window.createWorker({
        dob: worker.dob ? worker.dob : null,
        experience: worker.experience ?? '',
        fName: worker.firstName ?? '',
        gender: worker.gender ?? '',
        job: worker.job ?? '',
        lName: worker.lastName ?? '',
      })
    })
  })
})
