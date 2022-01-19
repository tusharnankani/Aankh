const Test = require('../models/test');

const createTest = (req, res) => {
    const { email, test_name, test_link_by_user,
        start_time, end_time, no_of_candidates_appear,
        total_threshold_warnings, threshold_multi_people,
        threshold_voice, threshold_third } = req.body;
    const test = new Test({
        userId: req.user.id,
        email: email,
        test_name: test_name,
        test_link_by_user: test_link_by_user,
        start_time: start_time,
        end_time: end_time,
        no_of_candidates_appear: no_of_candidates_appear,
        total_threshold_warnings: total_threshold_warnings,
        threshold_multi_people: threshold_multi_people,
        threshold_voice: threshold_voice,
        threshold_third: threshold_third
    })

    test.save((error, data) => {
        if (error) return res.status(400).json({ msg: "Something happened while creating new test", error });
        if (data) return res.status(201).json({ msg: "Successfully created new Test on platform" });
    })
}

const userCreatedTests = (req, res) => {
    const userId = req.user.id;
    if (userId) {
        Test.find({ userId: userId })
            .exec((error, _allTests) => {
                if (error) return res.status(400).json({ msg: "Something went wrong while fetching user tests", error })
                if (_allTests) return res.status(200).json({ _allTests })
            })
    } else {
        return res.status(400).json({
            msg: {
                one: "check user id, something wrong with it",
                two: "can't pass empty userId"
            }
        })
    }
}

const testAdminData = (req, res) => {
    const testId = req.params.testId;
    if (testId) {
        Test.find({ _id: testId })
            .exec((error, testData) => {
                if (error) return res.status(400).json({ msg: "Something went wrong while fetching test data", error })
                if (testData) return res.status(200).json({ testData })
            })
    } else {
        return res.status(400).json({
            msg: {
                one: "check test id, something wrong with it",
                two: "can't pass empty testId"
            }
        })
    }
}

const testRegister = (req, res) => {
    const { email, password } = req.body;
    // working on it
}

const terminateByAdmin = (req, res) => {
    const { userId } = req.params;
    if (userId) {
        // remaining
    }
}

module.exports = {
    createTest,
    userCreatedTests,
    testAdminData
}